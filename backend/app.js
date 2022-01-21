const express = require('express');
const path = require('path');
const morgan = require('morgan');
var cors = require('cors')
const { sequelize } = require('./models'); // db.sequelize
const brandsRouter = require('./routes/brands');

const app = express();

app.set('port', process.env.PORT || 4000);
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결됨.');
    }).catch((err) => {
        console.error(err);
    });

app.use(morgan('dev'));
app.use(cors({
    origin: "http://localhost:3000", // the origin of the requests - frontend address
    credentials: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/brands', brandsRouter);


app.get('/', (req, res) => {
    res.json(`${req.method}: ${req.url}`);
})

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});