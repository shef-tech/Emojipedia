import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmojipedia(create) {
    return (
        <Entry
            key={create.id}
            emoji={create.emoji}
            name={create.name}
            description={create.meaning}
        />
    );
}

function App() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">{emojipedia.map(createEmojipedia)}</dl>
        </div>
    );
}

export default App;
