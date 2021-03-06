document.addEventListener("DOMContentLoaded", function () {
  defaultView();
  checkScroll("inputWeeklyRow");
  checkScroll("inputDailyRow");
  checkScroll("outputItemWeeklyData");
  checkScroll("outputItemDailyData");

  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
    postDataTodos();
  });

  const addRowWeeklyButton = document.getElementById("weeklyAddRowButton");
  addRowWeeklyButton.addEventListener("click", function (event) {
    event.preventDefault();
    addRowWeeklyTable();
  });

  const addRowDailyButton = document.getElementById("dailyAddRowButton");
  addRowDailyButton.addEventListener("click", function (event) {
    event.preventDefault();
    addRowDailyTable();
  });
  //
  const saveDailyForm = document.getElementById("dailyButtonSave");
  saveDailyForm.addEventListener("click", function (event) {
    event.preventDefault();
    addDailySchedule();
    postDataInput(storageDailyInput, "inputDailyRow", "inputDailyData");
    postDataOutput(storageDaily, DAILY_TODO_ID);
  });

  const saveWeeklyForm = document.getElementById("weeklyButtonSave");
  saveWeeklyForm.addEventListener("click", function (event) {
    event.preventDefault();
    addWeeklySchedule();
    postDataInput(storageWeeklyInput, "inputWeeklyRow", "inputWeekData");
    postDataOutput(storageWeekly, WEEKLY_TODO_ID);
  });

  const weeklyResetButton = document.getElementById("weeklyResetButton");
  weeklyResetButton.addEventListener("click", function (event) {
    event.preventDefault();
    resetField("inputWeeklyRow");
  });

  const dailyResetButton = document.getElementById("dailyResetButton");
  dailyResetButton.addEventListener("click", function (event) {
    event.preventDefault();
    resetField("inputDailyRow");
  });

  const weeklyCancelButton = document.getElementById("weeklyCancelButton");
  weeklyCancelButton.addEventListener("click", function (event) {
    event.preventDefault();
    cancelChanges("WeeklyContainerInput", "WeeklyContainerOutput");
  });

  const dailyCancelButton = document.getElementById("dailyCancelButton");
  dailyCancelButton.addEventListener("click", function (event) {
    event.preventDefault();
    cancelChanges("DailyContainerInput", "DailyContainerOutput");
  });

  const toggleTodoList = document.getElementById("toggleTodoList");
  toggleTodoList.addEventListener("click", function (event) {
    navbarCatcher(event);
  });

  const toggleWeeklySchedule = document.getElementById("toggleWeeklySchedule");
  toggleWeeklySchedule.addEventListener("click", function (event) {
    navbarCatcher(event);
  });

  const toggleDailySchedule = document.getElementById("toggleDailySchedule");
  toggleDailySchedule.addEventListener("click", function (event) {
    navbarCatcher(event);
  });

  const editWeeklyButton = document.getElementById("editWeeklySchedule");
  editWeeklyButton.addEventListener("click", function (event) {
    event.preventDefault();
    showInputHideOutput("WeeklyContainerInput", "WeeklyContainerOutput");
  });

  const editDailyButton = document.getElementById("editButtonDaily");
  editDailyButton.addEventListener("click", function (event) {
    event.preventDefault();
    showInputHideOutput("DailyContainerInput", "DailyContainerOutput");
  });
});
