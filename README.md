## Prompts AI



It has two main goals:
1) Help first-time GPT-3 users to discover capabilities, strengths
and weaknesses of the technology.
2) Help developers to experiment with prompt engineering by optimizing
the product for concrete use cases such as creative writing, classification,
chat bots and others.

### Install

```shell script
yarn install 
yarn start
```

Note that each app user has to provide their own API key from the [OpenAI console](https://beta.openai.com/).
"Bring your own key" is an important concept enforced to prevent API misuse.

### Features

By use case:
* Examples: run the same prompt on multiple examples of data. Designed for 
classification and transformation tasks.
* Variations: generate multiple completions for a prompt and store them in one list,
compare variations by parameters and initial prompts.
Designed for creative writing tasks.
* Conversations: chat-like interface to experiment with conversational bots.
It also allows to maintain multiple conversations at the same time.

Common:
* Workspaces to quickly change between and experiment with multiple prompts.
State in the local storage. Download/upload prompt with parameters and examples 
as file.
* Code generators for Python, Node.js, Javascript, shell.
* Undo/redo for parameters and prompts.
* Shortcuts. 
* Templates. 

```
Shortcuts
===

Export the workspace to a file: Ctrl+S, Cmd+S
Run: Ctrl+Enter, Cmd+Enter

Switch between modes: Ctrl+1-4 
(1 - simple, 2 - examples, 3 - variations, 4 - conversations)
```

### Roadmap

- Minor UX changes (line break symbols instead of "\n", log probs etc)
- Authorization and collaborative features
- Community features to share and discover prompts 

### Contributing

The project is in a very early stage and still shaping its form.
It also has some amount of technical debt (for example, `editorSlice.ts`).
However, contributions are welcome. 



### Contributors

Sorted by the date of a first contribution. Feel free to add yourselves while making
 your first contribution!

