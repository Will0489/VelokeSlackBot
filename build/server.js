//
// This file must be in ES5 and is the start up file for our bot.
//
// http://stackoverflow.com/a/33644849/193165
//

"use strict";

require("dotenv").load({ silent: true });

if (!process.env.BOT_API_KEY) {
    console.log("Error: Specify slack api token in the environment variable 'token' first please.");
    process.exit(1);
}

console.log("Compiling ES6 code before startup ...");

require("babel-polyfill");
require("babel-core/register")({
    extensions: [".es6", ".es", ".jsx", ".js"]
});
require("./src/index.es6");

console.log("Done - Your bot is running now. Press CTRL-C to stop it.");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwibG9hZCIsInNpbGVudCIsInByb2Nlc3MiLCJlbnYiLCJCT1RfQVBJX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJleGl0IiwiZXh0ZW5zaW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQUEsa0JBQWtCQyxJQUFsQixDQUF1QixFQUFDQyxRQUFRLElBQVQsRUFBdkI7O0FBRUEsSUFBSSxDQUFDQyxRQUFRQyxHQUFSLENBQVlDLFdBQWpCLEVBQThCO0FBQzFCQyxZQUFRQyxHQUFSLENBQVksa0ZBQVo7QUFDQUosWUFBUUssSUFBUixDQUFhLENBQWI7QUFDSDs7QUFFREYsUUFBUUMsR0FBUixDQUFZLHVDQUFaOztBQUVBUCxRQUFRLGdCQUFSO0FBQ0FBLFFBQVEscUJBQVIsRUFBK0I7QUFDN0JTLGdCQUFZLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0IsS0FBeEI7QUFEaUIsQ0FBL0I7QUFHQVQsUUFBUSxpQkFBUjs7QUFFQU0sUUFBUUMsR0FBUixDQUFZLDBEQUFaIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vLyBUaGlzIGZpbGUgbXVzdCBiZSBpbiBFUzUgYW5kIGlzIHRoZSBzdGFydCB1cCBmaWxlIGZvciBvdXIgYm90LlxuLy9cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzNjQ0ODQ5LzE5MzE2NVxuLy9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoYGRvdGVudmApLmxvYWQoe3NpbGVudDogdHJ1ZX0pO1xuXG5pZiAoIXByb2Nlc3MuZW52LkJPVF9BUElfS0VZKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvcjogU3BlY2lmeSBzbGFjayBhcGkgdG9rZW4gaW4gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlICd0b2tlbicgZmlyc3QgcGxlYXNlLlwiKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG59XG5cbmNvbnNvbGUubG9nKFwiQ29tcGlsaW5nIEVTNiBjb2RlIGJlZm9yZSBzdGFydHVwIC4uLlwiKTtcblxucmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xucmVxdWlyZShcImJhYmVsLWNvcmUvcmVnaXN0ZXJcIikoe1xuICBleHRlbnNpb25zOiBbXCIuZXM2XCIsIFwiLmVzXCIsIFwiLmpzeFwiLCBcIi5qc1wiXVxufSk7XG5yZXF1aXJlKFwiLi9zcmMvaW5kZXguZXM2XCIpO1xuXG5jb25zb2xlLmxvZyhcIkRvbmUgLSBZb3VyIGJvdCBpcyBydW5uaW5nIG5vdy4gUHJlc3MgQ1RSTC1DIHRvIHN0b3AgaXQuXCIpO1xuIl19