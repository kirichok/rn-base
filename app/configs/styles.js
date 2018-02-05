const fonts = {
    size: {
        sm: 10,
        default: 16,
        md: 20,
        lg: 30,
        xl: 40
    },
    color: {
        default: '#4a4a4a',
        white: '#fff',
        label: '#9b9b9b',

        error: '#d0021b',
        disable: '#9b9b9b',
    }
};

const styles = {
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1,
    },

    sheet: {
        backgroundColor: {
            solid: 'rgb(243, 243, 243)',
            opacity: 'rgba(243, 243, 243, 0.87)',
        }
    },

    text: {
        size: fonts.size.default,
        color: fonts.color.default,

        // TODO: Add shadow prop to TextInput & Text components
        shadow: {
            color: "rgba(0, 0, 0, 0.3)",
            offset: {
                width: 0,
                height: 2
            },
            radius: 10
        }
    },

    icon: {
        mode: 'contain',
        size: 20,
        color: '#000',
    },

    label: {
        height: 20,

        focus: {
            top: 0,
            left: 0,
            size: fonts.size.sm,
            color: fonts.color.default
        },
        inline: {
            top: 20,
            left: 10,
            size: fonts.size.md,
            color: fonts.color.disable
        },
    },

    button: {
        activeOpacity: 0.75,
        height: 40,
        borderRadius: 0,

        font: {
            size: fonts.size.default,
            weight: '400'
        },
        color: {
            active: {
                background: '#4a90e2',
                font: fonts.color.white
            },
            disabled: {
                background: '#696969',
                font: fonts.color.white
            },
        },
    },

    switch: {
        font: {
            size: fonts.size.default,
            color: fonts.color.default,
        }
    },

    error: '#d0021b',

    underline: {
        list: '#efeff4',
        form: '#efeff4',
        menu: '#9b9b9b',
    }
};

export {fonts as defFonts, styles as defStyles}