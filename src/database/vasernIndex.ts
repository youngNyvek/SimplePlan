import VasernDB from './db';

const Plans  = VasernDB.get('Plans');
const Expenses = VasernDB.get('Expenses');
const Revenue = VasernDB.get('Revenue');

export default VasernDB;

export { Plans, Expenses, Revenue};
