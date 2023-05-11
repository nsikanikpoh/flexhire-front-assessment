/**
 * @generated SignedSource<<9f8385f39625b3782f7a6debfa4bc0de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobOpportunities_user",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 20
        }
      ],
      "concreteType": "JobConnection",
      "kind": "LinkedField",
      "name": "jobOpportunities",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "JobEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "JobNode_edges"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "jobOpportunities(first:20)"
    }
  ],
  "type": "User",
  "abstractKey": null
};

node.hash = "accbf3f043c6ab4cfaeb8d04d6205707";

module.exports = node;
