

export const returnOneImportantNotice = (n = []) => {
    const resp = n[Math.floor(Math.random() * n.length )] || '';
    return resp;
};

export const getNewData = (data = []) => {
    const resp = data.slice(0,6);
    return resp;
};


