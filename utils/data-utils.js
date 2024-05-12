export const transFromMongoIdByArray = data => {
    const { _id, ...remainingData } = data.map(({ _id, ...dt }) => ({
        id: _id.toString(),
        ...dt,
    }));
    return remainingData;
};

export const transFromMongoIdByObject = data => {
    const { _id, ...remainingData } = data;
    return {
        id: _id.toString(),
        ...remainingData,
    };
};
