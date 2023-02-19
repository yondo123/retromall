export const getCategories = () => {
    const token = 'testToken'; // 여기에 Bearer 토큰을 설정합니다.
    const url = `${process.env.NEXT_PUBLIC_API_KEY}/api/v1/categories`;

    fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Request Error', error);
        });
};
