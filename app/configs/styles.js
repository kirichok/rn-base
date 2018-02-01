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
    text: {
        size: fonts.size.default,
        color: fonts.color.default
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
        borderRadius: 0,
        font: {
            size: fonts.size.default
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

    error: '#d0021b',

    underline: {
        list: '#efeff4',
        form: '#efeff4',
        menu: '#9b9b9b',
    }
};

export {fonts as defFonts, styles as defStyles}