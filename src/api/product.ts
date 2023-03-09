import request from './instance';

export const getCategories = () => {
    return request({
        url: 'req/categories',
        method: 'get'
    });
};
