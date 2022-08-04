import { INewToken } from '@pollum-io/sysweb3-utils';

export const jsonPsbt = {
  psbt: {
    data: {
      inputs: [
        {
          witnessUtxo: {
            script: {
              type: 'Buffer',
              data: [
                0, 20, 170, 182, 235, 123, 26, 239, 64, 130, 174, 135, 252, 151,
                153, 203, 118, 82, 30, 223, 183, 103,
              ],
            },
            value: 41845537606,
          },
          partialSig: [
            {
              pubkey: {
                type: 'Buffer',
                data: [
                  2, 128, 200, 72, 47, 230, 29, 211, 241, 250, 100, 236, 91, 40,
                  32, 160, 138, 94, 30, 17, 112, 204, 215, 54, 185, 3, 195, 235,
                  118, 147, 170, 47, 244,
                ],
              },
              signature: {
                type: 'Buffer',
                data: [
                  48, 68, 2, 32, 91, 31, 18, 138, 243, 95, 166, 68, 50, 142, 44,
                  219, 103, 126, 26, 117, 16, 144, 250, 126, 177, 166, 248, 39,
                  199, 156, 163, 144, 66, 162, 148, 1, 2, 32, 106, 110, 77, 165,
                  232, 246, 81, 180, 204, 137, 194, 224, 15, 214, 65, 160, 224,
                  91, 97, 196, 215, 100, 102, 38, 220, 64, 43, 225, 120, 140,
                  20, 43, 1,
                ],
              },
            },
          ],
          bip32Derivation: [
            {
              masterFingerprint: {
                type: 'Buffer',
                data: [107, 150, 207, 141],
              },
              pubkey: {
                type: 'Buffer',
                data: [
                  2, 128, 200, 72, 47, 230, 29, 211, 241, 250, 100, 236, 91, 40,
                  32, 160, 138, 94, 30, 17, 112, 204, 215, 54, 185, 3, 195, 235,
                  118, 147, 170, 47, 244,
                ],
              },
              path: "m/84'/1'/0'/1/1443",
            },
          ],
          finalScriptWitness: {
            type: 'Buffer',
            data: [
              2, 71, 48, 68, 2, 32, 91, 31, 18, 138, 243, 95, 166, 68, 50, 142,
              44, 219, 103, 126, 26, 117, 16, 144, 250, 126, 177, 166, 248, 39,
              199, 156, 163, 144, 66, 162, 148, 1, 2, 32, 106, 110, 77, 165,
              232, 246, 81, 180, 204, 137, 194, 224, 15, 214, 65, 160, 224, 91,
              97, 196, 215, 100, 102, 38, 220, 64, 43, 225, 120, 140, 20, 43, 1,
              33, 2, 128, 200, 72, 47, 230, 29, 211, 241, 250, 100, 236, 91, 40,
              32, 160, 138, 94, 30, 17, 112, 204, 215, 54, 185, 3, 195, 235,
              118, 147, 170, 47, 244,
            ],
          },
          unknownKeyVals: [
            {
              key: {
                type: 'Buffer',
                data: [97, 100, 100, 114, 101, 115, 115],
              },
              value: {
                type: 'Buffer',
                data: [
                  116, 115, 121, 115, 49, 113, 52, 50, 109, 119, 107, 55, 99,
                  54, 97, 97, 113, 103, 57, 116, 53, 56, 108, 106, 116, 101,
                  110, 106, 109, 107, 50, 103, 48, 100, 108, 100, 109, 56, 117,
                  51, 110, 52, 121, 108,
                ],
              },
            },
            {
              key: {
                type: 'Buffer',
                data: [112, 97, 116, 104],
              },
              value: {
                type: 'Buffer',
                data: [
                  109, 47, 56, 52, 39, 47, 49, 39, 47, 48, 39, 47, 49, 47, 49,
                  52, 52, 51,
                ],
              },
            },
          ],
        },
      ],
      outputs: [{}, {}, {}],
      globalMap: {
        unsignedTx: {},
      },
    },
  },
  assets: {},
};

export const tokenCreationMock: INewToken = {
  symbol: 'v2 spt token',
  maxsupply: 50000,
  description: 'v2 spt token for testing',
  fee: Number(0.00001),
  precision: 8, // default precision
};

export const CapabilityFlagsActivatedGuid = '3502349504';
