export class PlanModel {
    name = 'Plans';
    props= {
        month: 'string',
        year: 'string',
        expenseValue: '?string',
        revenueValue: '?string'
    }
}

export class ExpensesModel{
    name= 'Expenses'
    props= {
        name: 'string',
        value: 'int',
        plan: '#Plans',
        date: 'datetime'
    }
}

export class RevenueModel{
    name= 'Revenue'
    props= {
        name: 'string',
        value: 'int',
        plan: '#Plans',
        date: 'datetime'
    }
}