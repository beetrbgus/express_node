const mongoose = require('mongoose');

module.exports = () => {
    const connect = async () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }

        try {
            await mongoose.connect('mongodb://localhost:27017', {
                dbName: 'nodejs'
            });
            console.log('연결 성공-!');
        } catch (error) {
            console.log('몽고디비 연결 에러 - ', error);
        }
    };

    connect();
    mongoose.connection.on('erorr', (error) => {
        console.error('몽고 디비 연결 오류');
    });

    mongoose.connection.on('disconnected', () => {
        console.error('몽고 디비 연결이 끊겼습니다. 연결을 재시도합니다.');
        connect();
    });

    require('./user');
    require('./comment');
}