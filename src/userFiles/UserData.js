/*
    notes:
    - you cannot have pages with identical names

    - a page cannot contain 2 tabs with identical names
      (different pages having the same tab name is ok!)
 */

let UserData = {
    title: "NieReact",
    pageData: {
        "Home": {
            icon: "bi-house-fill",
            format: "text",
            tabs: {
                "Test": {
                    leftHeader: "hi",
                    left: "hello this is the test block",
                    rightHeader: "hello",
                    right: "yes that's right this is the test block"
                },
                "Other One": {
                    leftHeader: "hi",
                    left: "this is the other one",
                    rightHeader: "hello",
                    right: "yes that's right this is the other one"
                }
            }
        },

        "Tutorial": {
            icon: "bi-house-fill",
            format: "text",
            tabs: {
                "Test": {
                    leftHeader: "hi",
                    left: "2",
                    rightHeader: "hello",
                    right: "yes that's right this is the test block"
                },
                "Other One": {
                    leftHeader: "hi",
                    left: "this is the other one",
                    rightHeader: "hello",
                    right: "yes that's right this is the other one"
                }
            }
        },

        "Questions": {
            icon: "bi-house-fill",
            format: "text",
            tabs: {
                "Test": {
                    leftHeader: "hi",
                    left: "3",
                    rightHeader: "hello",
                    right: "yes that's right this is the test block"
                },
                "Other One": {
                    leftHeader: "hi",
                    left: "this is the other one",
                    rightHeader: "hello",
                    right: "yes that's right this is the other one"
                }
            }
        },

        "Credits": {
            icon: "bi-house-fill",
            format: "text",
            tabs: {
                "Test": {
                    leftHeader: "hi",
                    left: "4",
                    rightHeader: "hello",
                    right: "yes that's right this is the test block"
                },
                "Other One": {
                    leftHeader: "hi",
                    left: "this is the other one",
                    rightHeader: "hello",
                    right: "yes that's right this is the other one"
                }
            }
        },
    }
}

export default UserData;