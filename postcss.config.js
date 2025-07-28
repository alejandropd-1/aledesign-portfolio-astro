export default {
    plugins: {
        'postcss-preset-env': {
            stage: 2,
            features: {
                'nesting-rules': true,
                'custom-properties': true,
                'media-query-ranges': true,
            },
        },
    },
};
