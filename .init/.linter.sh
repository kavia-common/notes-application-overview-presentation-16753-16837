#!/bin/bash
cd /home/kavia/workspace/code-generation/notes-application-overview-presentation-16753-16837/notes_app_presentation_frontend
npm run lint
ESLINT_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

