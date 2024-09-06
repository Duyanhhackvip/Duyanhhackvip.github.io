function x30(input) {
              if (input.checked) {
                ActiveCodePatch
                h5gg.clearResults();
                h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
                h5gg.editAll('4397530849745000000', 'I64');
                
                codeStatus = true;
              } else {
                DeactiveCodePatch
                h5gg.editAll('4397530849764387586', 'I64');
                codeStatus = false;
              }
            }