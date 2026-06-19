import React from "react";

export function markdownToHtml(content: string) {
    let results = [];
    let lines = content.split(/\r?\n/);
    for (const line of lines){
        if (line.length > 0 && line[0] == "#") {
            const result = renderHeader(line);
            results.push(result);
        }
    }
    return (
        <div>
            {results}
        </div>
    );

}

function renderHeader(line: string) {
    const split = line.split("#")
    const level = split.length - 1;
    const Tag = `h${level}`;
    const content = (
        <Tag key={split[level]}>{split[level]}</Tag>
    )
    return content;    
}