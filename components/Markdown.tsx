import ReactMarkdown from "react-markdown";

interface MarkdownProps{
    text: string;
}

export default function Markdown({text}: MarkdownProps){
    return(
        <ReactMarkdown className="lineBreak"
                       children={text}
                       components={{
                                h3({children, ...props}){
                                    return(
                                        <h3 className="h3" >{children}</h3>
                                    )
                                },
                                code({children, ...props}){
                                    return(
                                        <div className="code" >
                                            <code className="code-text" >{children}</code>
                                        </div>
                                    )
                                }
                        }}/>
    )
}