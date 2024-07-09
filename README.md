# Report for Assignment 1 resit

## Project chosen

Name: compressorjs

URL: [https://github.com/fengyuanchen/compressorjs](https://github.com/fengyuanchen/compressorjs)

Number of lines of code and the tool used to count it: 4674 (calculated with Lizard)

Programming language: JavaScript

## Coverage measurement with existing tool

The name of the tool used is karma, you can execute this by doing `yarn test`

Test coverage before changes:
<img width="644" alt="Screenshot 2024-07-08 at 6 55 37 PM" src="https://github.com/Xignotic84/compressorjs/assets/38007603/e5918c23-74fc-49b1-8c9e-60730517a5fe">

## Coverage improvement

### Individual tests

Function 1: parseOrientation

[Link to commit for function 1 coverage](https://github.com/Xignotic84/compressorjs/commit/4e47e187cce7082848ac758b3b41774db0810df1)

Old coverage results for this function:
<img width="644" alt="Screenshot 2024-07-08 at 6 55 37 PM" src="https://github.com/Xignotic84/compressorjs/assets/38007603/e5918c23-74fc-49b1-8c9e-60730517a5fe">

Improvement after first function coverage:
<img width="456" alt="Screenshot 2024-07-09 at 6 57 01 PM" src="https://github.com/Xignotic84/compressorjs/assets/38007603/04d668a5-1377-4559-aeaf-ed9e47fbe602">


The coverage improvement before implementing tests for the first function was 87.67% and was improved to 90.99%. This was because my test covered the branches within the switch case in the parseOrientation function

Function 2:

[Link to commit for function 2 coverage](https://github.com/Xignotic84/compressorjs/commit/7bf7bcf80de9704ce7d48198657912fdf46215be)

Old coverage results for this function:
<img width="456" alt="Screenshot 2024-07-09 at 6 57 01 PM" src="https://github.com/Xignotic84/compressorjs/assets/38007603/04d668a5-1377-4559-aeaf-ed9e47fbe602">

Improvement after second function coverage:
<img width="570" alt="Screenshot 2024-07-09 at 9 10 57 PM" src="https://github.com/Xignotic84/compressorjs/assets/38007603/c052f7a7-e6bb-4c9c-a24d-aaa8f67ab46b">

The coverage has been increased from  90.99% to 91.46%. This was improved by covering a if branch in the insertExif which handles an error case that was not covered by previous tests.

### Overall

Coverage before tests
<img width="644" alt="Screenshot 2024-07-08 at 6 55 37 PM" src="https://github.com/Xignotic84/compressorjs/assets/38007603/e5918c23-74fc-49b1-8c9e-60730517a5fe">

Coverage after tests
<img width="570" alt="Screenshot 2024-07-09 at 9 10 57 PM" src="https://github.com/Xignotic84/compressorjs/assets/38007603/c052f7a7-e6bb-4c9c-a24d-aaa8f67ab46b">
