exports.main = async (context, sendResponse) => {
  try {
      // Lấy dữ liệu từ request
      const requestBody = JSON.parse(context.body);

      // Gửi yêu cầu đến API HubDB
      const response = await fetch(`https://api.hubspot.com/cms/v3/hubdb/tables/${requestBody.tableId}/rows`, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${context.secrets.ACCESS_TOKEN}`, // Lấy Access Token từ Secrets
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody.rowData),
      });

      const responseData = await response.json();

      // Trả về kết quả cho client
      sendResponse({
          statusCode: response.status,
          body: responseData,
      });
  } catch (error) {
      console.error('Error:', error);
      sendResponse({
          statusCode: 500,
          body: { message: 'Internal Server Error', error: error.message },
      });
  }
};
