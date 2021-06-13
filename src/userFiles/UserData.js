/*
    notes:
    - you cannot have pages with identical names

    - a page cannot contain 2 tabs with identical names
      (different pages having the same tab name is ok!)

    - if the format is html, then a tab needs to have
      only a left and right! the html tags inside of
      them will be put into the left and right boxes
      respectively on that tab.
 */
import React from 'react';

let UserData = {
    title: "NieReact",
    pageData: {
        "Home": {
            format: "text",
            tabs: {
                "Test": {
                    left: "hello this is the test block",
                    right: "yes that's right this is the test block"
                },
                "Other One": {
                    left: "this is the other one",
                    right: "yes that's right this is the other one"
                }
            }
        },

        "Tutorial": {
            format: "html",
            tabs: {
                "Test": {
                    left: <p>hello this is the test block</p>,
                    right: <p>yes that's right this is the test block</p>
                },
                "Other One": {
                    left: <p>this is the other one</p>,
                    right: <p>yes that's right this is the other one</p>
                }
            }
        },

        "Credits": {
            format: "html",
            tabs: {
                "Test": {
                    left: <p>hello this is the test block</p>,
                    right: <p>yes that's right this is the test block</p>
                },
                "Other One": {
                    left: <p>this is the other one</p>,
                    right: <p>yes that's right this is the other one</p>
                }
            }
        }
    }
}

export default UserData;