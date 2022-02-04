/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'plugin:react/recommended'],
  plugins: ['notice'],
  ignorePatterns: ['node_modules'],
  rules: {
    'notice/notice': [
      'error',
      {
        templateFile: path.resolve(__dirname, 'notice-template.txt'),
      },
    ],
    '@typescript-eslint/no-shadow': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-first-prop-new-line': [
      2,
      'multiline'
    ],
    'react/jsx-max-props-per-line': [
      2,
      {
        'maximum': 1,
        'when': 'multiline'
      }
    ],
    'react/jsx-indent-props': [
      2,
      2
    ],
    'react/jsx-closing-bracket-location': [
      2,
      'tag-aligned'
    ]
  },
};
