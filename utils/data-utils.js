export const transFromMongoIdByArray = data => {
    const updatedData = data
        .map(dt => ({
            id: dt._id.toString(),
            ...dt,
        }))
        .map(({ _id, ...rest }) => ({ ...rest }));
    return updatedData;
};

export const transFromMongoIdByObject = data => {
    const { _id, ...remainingData } = data;
    return {
        id: _id.toString(),
        ...remainingData,
    };
};
