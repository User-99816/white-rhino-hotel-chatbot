import "./TextRenderer.css";

export default function TextRenderer({

    message,

    onAction,

    onSend

}) {

    return (

        <div className="text-renderer">

            <p>{message.text || message.message}</p>

            {message.quickReplies?.length > 0 && (

                <div className="quick-replies">

                    {message.quickReplies.map((reply, index) => {

                        // Old string format
                        if (typeof reply === "string") {

                            return (

                                <button
                                    key={index}
                                    onClick={() => onSend?.(reply)}
                                >
                                    {reply}
                                </button>

                            );

                        }

                        // New object format
                        return (

                            <button
                                key={reply.action || index}
                                onClick={() =>
                                    reply.action
                                        ? onAction?.(
                                              reply.action,
                                              reply.payload || {}
                                          )
                                        : onSend?.(reply.text)
                                }
                            >
                                {reply.icon && <span>{reply.icon} </span>}
                                {reply.text}
                            </button>

                        );

                    })}

                </div>

            )}

        </div>

    );

}