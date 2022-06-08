function getUnitCode(codeName) {
    const code = [];
    for (let i = 0; i < 10; i++) {
        const index = String.fromCharCode(65 + i);
        const obj = {
            id: `SINV.RECEIPT_WORKBENCH_THING.DETAIL.BUTTON.${index}`,
            name: [
                {
                    eventCode: `${codeName}`,
                    callback(cache) {
                        const headerInfo = cache[`SINV.RECEIPT_WORKBENCH_THING.DETAIL.${index}`];
                        const { dataSet: formDs } = headerInfo;
                        handleOperate(formDs, codeName);
                    },
                },
            ],
        };
        code.push(obj);
    }
    const temp = {};
    code.forEach((i) => {
        const { id, name } = i;
        temp[`${id}`] = name;
    });
    return temp;
}


console.log(getUnitCode('111'), 111)