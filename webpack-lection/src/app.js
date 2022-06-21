import './styles.css';

import $ from 'jquery';
import { TodoController } from './controller/TodosController';

// import './logo.png';

$(() => {
    new TodoController($('.container'));
});
