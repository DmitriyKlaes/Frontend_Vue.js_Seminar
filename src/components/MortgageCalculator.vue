Вам необходимо создать компонент ипотечного калькулятора, который позволяет пользователю
вводить сумму кредита, процентную ставку и срок кредита. Компонент должен автоматически
вычислять ежемесячный платеж и общую сумму выплаты по кредиту. Создайте компонент
MortgageCalculator с соответствующим шаблоном и скриптом. В шаблоне компонента разместите
поля ввода для суммы кредита, процентной ставки и срока кредита, а также элементы для
отображения ежемесячного платежа и общей суммы выплаты. Используйте директиву v-model для
связывания введенных пользователем значений с соответствующими свойствами в компоненте.
Создайте вычисляемое свойство monthlyPayment, которое будет вычислять ежемесячный платеж
на основе введенных значений суммы кредита, процентной ставки и срока кредита. Создайте
вычисляемое свойство totalPayment, которое будет вычислять общую сумму выплаты по кредиту,
учитывая ежемесячный платеж и срок кредита. Отобразите значения monthlyPayment и
totalPayment в соответствующих элементах шаблона.

<template>
  <div>
    <form>
      <input required type="number" v-model="summ" placeholder="Сумма кредита" />
      <input required type="number" v-model="procent" placeholder="Процентная ставка" />
      <input required type="number" v-model="time" placeholder="Срок кредита (мес)" />
    </form>
    <div>
      <p>Ежемесячная оплата: {{ monthlyPayment.payByMounth }}</p>
      <p>Общая сумма кредита: {{ monthlyPayment.total }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MortgageCalculator',
  created() {},
  data() {
    return {
      summ: null,
      procent: null,
      time: null,
    };
  },
  props: {},
  methods: {},
  computed: {
    monthlyPayment: function () {
      const principal = parseFloat(this.summ);
      const interestRate = parseFloat(this.procent) / 100 / 12;
      const loanTermMonths = parseFloat(this.time);
      const numerator =
        principal * interestRate * Math.pow(1 + interestRate, loanTermMonths);
      const denominator = Math.pow(1 + interestRate, loanTermMonths) - 1;
      const payByMounth = (numerator / denominator).toFixed(2);
      const total = (payByMounth * this.time).toFixed(2);
      return { payByMounth, total };
    },
  },
};
</script>

<style lang="scss" scoped></style>
