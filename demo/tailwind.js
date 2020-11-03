/* eslint-disable global-require */

module.exports = {
  // https://getbootstrap.com/docs/4.1/layout/grid/#grid-options
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },

  plugins: [require('../lib')({ rtl: true })],

  corePlugins: {
    container: false,
    alignContent: false,
    alignItems: false,
    alignSelf: false,
    appearance: false,
    backgroundAttachment: false,
    backgroundColor: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    borderColor: false,
    borderRadius: false,
    borderStyle: false,
    borderWidth: false,
    boxShadow: false,
    cursor: false,
    display: false,
    fill: false,
    flex: false,
    flexDirection: false,
    flexGrow: false,
    flexShrink: false,
    flexWrap: false,
    float: false,
    fontFamily: false,
    fontSize: false,
    fontSmoothing: false,
    fontStyle: false,
    fontWeight: false,
    height: false,
    inset: false,
    justifyContent: false,
    letterSpacing: false,
    lineHeight: false,
    listStylePosition: false,
    listStyleType: false,
    margin: false,
    maxHeight: false,
    maxWidth: false,
    minHeight: false,
    minWidth: false,
    objectFit: false,
    objectPosition: false,
    opacity: false,
    order: false,
    outline: false,
    overflow: false,
    padding: false,
    pointerEvents: false,
    position: false,
    resize: false,
    stroke: false,
    tableLayout: false,
    textAlign: false,
    textColor: false,
    textDecoration: false,
    textTransform: false,
    userSelect: false,
    verticalAlign: false,
    visibility: false,
    whitespace: false,
    width: false,
    wordBreak: false,
    zIndex: false,
  },
};
