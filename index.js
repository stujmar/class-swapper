const swapper = ({value, isTrue, isFalse, base }) => {
    if (!base) {
        return value ? isTrue : isFalse;
    } else {
        return value ? `${base} ${isTrue}` : `${base} ${isFalse}`;
    }
}

module.exports.swapper = swapper;