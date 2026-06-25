const year = new Date().getFullYear();
const month = String(new Date().getMonth() + 1).padStart(2, '0');
const d = (n) => `${year}-${month}-${String(n).padStart(2, '0')}`;
export const todayIso = () => new Date().toISOString().slice(0, 10);
export const seedState = {
  version: 6,
  settings: {
    businessName: 'Eco-Clean', ownerName: 'Juan José', city: 'Jalpan, Querétaro', businessType: 'Venta de productos de limpieza', currency: 'MXN', workingYear: year,
    dailySalesGoal: 4500, targetBusinessDays: 26, monthlyExpenseLimit: 38000, healthyNetMargin: 0.20, reserveRate: 0.10
  },
  categories: [
    ['Mostrador','Venta','#0ea5e9','🏪'], ['WhatsApp','Venta','#22c55e','💬'], ['Facebook','Venta','#2563eb','📣'], ['Referido','Venta','#8b5cf6','🤝'],
    ['Mercancía','Compra','#06b6d4','📦'], ['Insumos','Compra','#14b8a6','🧴'], ['Empaque','Compra','#64748b','🛍️'], ['Servicios','Compra','#475569','🔧'],
    ['Renta','Gasto operativo','#f97316','🏠'], ['Luz','Gasto operativo','#eab308','💡'], ['Agua','Gasto operativo','#0ea5e9','💧'], ['Gas','Gasto operativo','#f59e0b','🔥'], ['Nómina','Gasto operativo','#ef4444','👥'], ['Marketing','Gasto operativo','#a855f7','📢'], ['Mantenimiento','Gasto operativo','#64748b','🛠️'], ['Transporte','Gasto operativo','#f59e0b','🚚'], ['Comisiones','Gasto operativo','#ec4899','%'], ['Otros','General','#475569','•'],
    ['Ingreso extra','Ingreso extra','#16a34a','➕'], ['Gasto extra','Gasto extra','#dc2626','➖'], ['Pago de deuda','Pago de deuda','#7c3aed','💳']
  ].map(([name, group, color, icon], i) => ({ id: `cat-${i}`, name, group, color, icon, active: true })),
  paymentMethods: [['Efectivo','#16a34a','💵'], ['Transferencia','#2563eb','🏦'], ['Tarjeta','#7c3aed','💳'], ['Crédito','#f97316','🧾'], ['Otro','#64748b','•']].map(([name,color,icon], i) => ({ id:`pm-${i}`, name, color, icon, active:true })),
  tags: [['Fijo','#334155','📌'], ['Variable','#0284c7','🔁'], ['Pagado','#16a34a','✅'], ['Pendiente','#d97706','⏳']].map(([name,color,icon], i) => ({ id:`tag-${i}`, name, color, icon, active:true })),
  debts: [
    { id: 'debt-1', name: 'Caja Popular Crédito 1', initialBalance: 0, balance: 0, monthlyPayment: 0, annualInterest: 0, priority: 'Alta', status: 'Activa', notes: '' },
    { id: 'debt-2', name: 'Caja Popular Crédito 2', initialBalance: 0, balance: 0, monthlyPayment: 0, annualInterest: 0, priority: 'Media', status: 'Activa', notes: '' },
    { id: 'debt-3', name: 'BBVA Préstamo Personal', initialBalance: 0, balance: 0, monthlyPayment: 0, annualInterest: 0, priority: 'Alta', status: 'Activa', notes: '' },
    { id: 'debt-4', name: 'BBVA Tarjeta', initialBalance: 0, balance: 0, monthlyPayment: 0, annualInterest: 0, priority: 'Alta', status: 'Activa', notes: '' },
    { id: 'debt-5', name: 'Liverpool', initialBalance: 0, balance: 0, monthlyPayment: 0, annualInterest: 0, priority: 'Baja', status: 'Activa', notes: '' }
  ],
  movements: [
    { id: 'm1', date: d(1), type: 'venta', category: 'Mostrador', concept: 'Venta diaria', amount: 3800, paymentMethod: 'Efectivo', notes: 'Dato demo editable' },
    { id: 'm2', date: d(2), type: 'venta', category: 'WhatsApp', concept: 'Pedidos por WhatsApp', amount: 5200, paymentMethod: 'Transferencia', notes: 'Dato demo editable' },
    { id: 'm3', date: d(3), type: 'compra', category: 'Mercancía', concept: 'Compra de mercancía', amount: 7200, paymentMethod: 'Transferencia', notes: 'Dato demo editable' },
    { id: 'm4', date: d(4), type: 'gasto', category: 'Luz', concept: 'Recibo de luz', amount: 950, paymentMethod: 'Transferencia', notes: 'Dato demo editable' },
    { id: 'm5', date: d(5), type: 'venta', category: 'Mostrador', concept: 'Venta mostrador', amount: 4650, paymentMethod: 'Efectivo', notes: 'Dato demo editable' },
    { id: 'm6', date: d(8), type: 'venta', category: 'Facebook', concept: 'Cliente por Facebook', amount: 6100, paymentMethod: 'Transferencia', notes: 'Dato demo editable' },
    { id: 'm7', date: d(9), type: 'ingreso_extra', category: 'Ingreso extra', concept: 'Ingreso adicional', amount: 1200, paymentMethod: 'Efectivo', notes: 'Dato demo editable' },
    { id: 'm8', date: d(10), type: 'gasto_extra', category: 'Gasto extra', concept: 'Gasto extraordinario', amount: 450, paymentMethod: 'Efectivo', notes: 'Dato demo editable' }
  ]
};
