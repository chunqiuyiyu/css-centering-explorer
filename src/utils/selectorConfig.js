const globalSelector = {
  id: 'g',
  desc: 'I would like to center something ',
  children: {
    h: {
      id: 'h',
      desc: 'Child element is ',
      name: 'horizontally',
      children: {
        i: {
          name: 'inline or inline-*'
        },
        b: {
          id: 'h-b',
          desc: 'The number of child element is ',
          name: 'block',
          children: {
            o: {
              name: 'one'
            },
            m: {
              id: 'h-b-m',
              desc: 'Elements are displayed ',
              name: 'more than one',
              children: {
                i: {
                  name: 'in a row'
                },
                v: {
                  name: 'vertically'
                }
              }
            }
          }
        }
      }
    },
    v: {
      id: 'v',
      desc: 'Child element is ',
      name: 'vertically',
      children: {
        i: {
          id: 'v-i',
          desc: 'Contents are displayed in ',
          name: 'inline or inline-*',
          children: {
            a: {
              id: 'v-i-a',
              desc: 'I can use the CSS property: ',
              name: 'a single line',
              children: {
                p: {
                  name: 'padding'
                },
                l: {
                  name: 'line-height'
                }
              }
            },
            m: {
              id: 'v-i-m',
              desc: 'I can use the CSS property (value): ',
              name: 'multiple lines',
              children: {
                v: {
                  name: 'vertical-align'
                },
                f: {
                  name: 'flex'
                },
                c: {
                  name: 'content'
                }
              }
            }
          }
        },
        b: {
          id: 'v-b',
          desc: 'The height of child element is ',
          name: 'block',
          children: {
            k: {
              name: 'known'
            },
            u: {
              id: 'v-b-u',
              desc: 'I can use the CSS property (value): ',
              name: 'unknown',
              children: {
                t: {
                  name: 'transform'
                },
                f: {
                  name: 'flex'
                }
              }
            }
          }
        }
      }
    },
    b: {
      id: 'b',
      desc: 'Browsers I need to support are ',
      name: 'both horizontally and vertically',
      children: {
        o: {
          id: 'b-o',
          desc: 'The size (width and height) of child element is ',
          name: 'old',
          children: {
            f: {
              name: 'fixed'
            },
            u: {
              name: 'unknown'
            }
          }
        },
        m: {
          id: 'b-m',
          desc: 'I can use the CSS value: ',
          name: 'modern',
          children: {
            f: {
              name: 'flex'
            },
            g: {
              name: 'grid'
            }
          }
        }
      }
    }
  }
};

const getChildrenArr = (obj) => {
  const result = [];
  const children = obj.children;

  if (children) {
    for (let key of Object.keys(children)) {
      if (key !== 'id') {
        result.push(children[key].name)
      }
    }
  }

  return result;
}

export {
  globalSelector,
  getChildrenArr,
}
