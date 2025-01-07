# PlaSa - Playbook Sandbox 

PlaSa is only a **structure** for testing technology and life-style recommendation generation from keywords. 

The steps to turn it into a more realistic Playbook generator is more-or-less as follows:

1. The search for is only a keyword match. The search functionality is implemented in ```src/utils/searchTools.ts```, which uses ```calculateToolScore``` from ```src/utils/scoring.ts``` to <ins>score and rank</ins> the tools based on the keywords.
2. The tools themslves are in ```src/data/tools.ts``` as a  list with the following structure for each entry:

   ```{
    name: "Perplexity",
    description: "AI-powered search engine for intelligent web searching",
    effectivenessScore: 92,
    category: "General Assistance",
    url: "https://perplexity.ai"
  }```

What needs to be done (very briefly):

1. Extract search keywords from survey and use them instead of the hard-coded keywords.
2. Use semantic matching instead of strict keyword matching for the search.
3. The search needs to be in 2 steps: First in the local Knowledge Base and then on the Internet.
    - The Internet search will require use of an intelligent search engine or search AI, maybe together with an LLM, to do a proper search that covers the actual "meaning" (semantics, essence) of what we are searching for.  
    - Internet search will require API keys.
    - Internet search will require well-planned and tested prompts or questions.
4. Internet search and Knowledge Base search should cover both tool/technology recommendations and life-style recommendations
5. Knowledge Base should be updated (with update date) after each Internet search.
6. Knowledge Base is a convenience and a performance enhancement and will reduce the cost of the API-key based search. It may not be implemented initially but it should be implemented as soon as possible.
