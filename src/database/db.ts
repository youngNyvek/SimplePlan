import Vasern from 'vasern';

import { PlanModel, ExpensesModel,  RevenueModel } from './schemas';
export default new Vasern({
    schemas: [PlanModel, ExpensesModel, RevenueModel],
    version: 4
});