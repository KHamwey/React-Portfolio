import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import {
  LexRuntimeV2Client,
  RecognizeTextCommand,
} from "@aws-sdk/client-lex-runtime-v2";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import "./LexChat.css";

const config = {
  region: process.env.REACT_APP_AWS_REGION,
  identityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID,
  botId: process.env.REACT_APP_LEX_BOT_ID,
  botAliasId: process.env.REACT_APP_LEX_BOT_ALIAS_ID,
  localeId: process.env.REACT_APP_LEX_LOCALE_ID || "en_US",
};

const WELCOME_MESSAGE = {
  role: "bot",
  text: "Hi! I'm Kyle's AI assistant. Ask me for his resume, portfolio links, or how to get in touch.",
};

const LexChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const sessionId = useRef(
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `session-${Date.now()}-${Math.random().toString(36).slice(2)}`
  ).current;

  const configured = Boolean(
    config.region && config.identityPoolId && config.botId && config.botAliasId
  );

  const client = useMemo(() => {
    if (!configured) return null;
    return new LexRuntimeV2Client({
      region: config.region,
      credentials: fromCognitoIdentityPool({
        clientConfig: { region: config.region },
        identityPoolId: config.identityPoolId,
      }),
    });
  }, [configured]);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = useCallback(
    async (text) => {
      if (!text.trim() || sending || !client) return;
      setMessages((prev) => [...prev, { role: "user", text }]);
      setInput("");
      setSending(true);
      setError(null);
      try {
        const resp = await client.send(
          new RecognizeTextCommand({
            botId: config.botId,
            botAliasId: config.botAliasId,
            localeId: config.localeId,
            sessionId,
            text,
          })
        );
        const botMessages = (resp.messages || []).map((m) => ({
          role: "bot",
          text: m.content || "",
        }));
        if (botMessages.length === 0) {
          botMessages.push({
            role: "bot",
            text: "(no response)",
          });
        }
        setMessages((prev) => [...prev, ...botMessages]);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Lex error", e);
        setError(e.message || "Unable to reach assistant");
      } finally {
        setSending(false);
      }
    },
    [client, sending, sessionId]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  if (!configured) {
    // Silently render nothing in dev/preview if env not wired yet.
    // eslint-disable-next-line no-console
    if (typeof window !== "undefined") {
      console.warn(
        "[LexChat] Skipping render — REACT_APP_COGNITO_IDENTITY_POOL_ID / LEX_BOT_ID not set."
      );
    }
    return null;
  }

  return (
    <>
      <button
        type="button"
        className={`lex-chat-toggle ${open ? "is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat with Kyle's AI"}
      >
        <i className={`fas ${open ? "fa-times" : "fa-comment-dots"}`}></i>
      </button>

      {open && (
        <div className="lex-chat-panel" role="dialog" aria-label="Chat with Kyle's AI assistant">
          <div className="lex-chat-header">
            <div>
              <strong>Ask Kyle's AI</strong>
              <div className="lex-chat-sub">Powered by Amazon Lex V2</div>
            </div>
          </div>

          <div className="lex-chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`lex-msg lex-msg-${m.role}`}>
                <div className="lex-bubble">{m.text}</div>
              </div>
            ))}
            {sending && (
              <div className="lex-msg lex-msg-bot">
                <div className="lex-bubble lex-typing">
                  <Spinner animation="grow" size="sm" />{" "}
                  <Spinner animation="grow" size="sm" />{" "}
                  <Spinner animation="grow" size="sm" />
                </div>
              </div>
            )}
            {error && (
              <div className="lex-msg lex-msg-error">
                <div className="lex-bubble">⚠️ {error}</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <Form className="lex-chat-input" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={sending}
              autoFocus
            />
            <Button
              type="submit"
              variant="primary"
              disabled={sending || !input.trim()}
            >
              Send
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default LexChat;
