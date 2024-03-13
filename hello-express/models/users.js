module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        // id 컬럼은 기본키로 연결해 적을 필요가 없음.
        name : {
            type : DataTypes.STRING(20),
            allowNull : false,
            unique : true,
        },
        age : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },
        married : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
        },
        comment : {
            type : DataTypes.TEXT,
            allowNull : true,
        },
        created_at : {
            type : DataTypes.DATE,
            allowNull : false,
            defaultValue : DataTypes.NOW,
        },
    }, {
        timestamps : false
    });
}