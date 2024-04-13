export class BackendService {
  maxRetry = 5;
  currentRetry = 0;
  async saveDetails(data: any) {
    try {
      await fetch("https://tuition-be.onrender.com/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
        return 'Your data is saved.'
    } catch (ex) {
        return 'Your data was not saved';
    }
  }

  async getAllStudents() {
    return await fetch("https://tuition-be.onrender.com/student");
  }
}
