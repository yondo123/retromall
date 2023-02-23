export const getCategories = () => {
    // const token = 'testToken'; // 여기에 Bearer 토큰을 설정합니다.
    const url = '/req/categories';

    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
};
