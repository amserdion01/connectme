import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const sid = "clgzlxqr00000lglqlragmsed"
  const uid = "clgwspw30000klge4m16t2ccs"
  const questionData = [
    { title: 'Python List Comprehension', content: 'What does this Python code do?\n```py\n[num ** 2 for num in range(10)]\n```', serverId: sid, userId: uid },
    { title: 'JavaScript Promise', content: 'Can someone explain this JavaScript Promise?\n```js\nnew Promise((resolve, reject) => { resolve("Hello World"); }).then(console.log);\n```', serverId: sid, userId: uid },
    { title: 'React useEffect', content: 'How does this useEffect hook work in React?\n```js\nuseEffect(() => { console.log("Component mounted"); }, []);\n```', serverId: sid, userId: uid },
    { title: 'SQL Query', content: 'Can someone help me understand this SQL query?\n```sql\nSELECT * FROM Users WHERE Age > 18;\n```', serverId: sid, userId: uid },
    { title: 'Quantum Circuit', content: 'Could someone explain this Quantum Circuit?\n```qc\nH 0\nCX 0 1\nM 0 1\n```', serverId: sid, userId: uid },
    { title: 'Java Class', content: 'What does this Java class do?\n```java\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}\n```', serverId: sid, userId: uid },
    { title: 'CSS Flexbox', content: 'What does this CSS flexbox style do?\n```css\n.container {\n  display: flex;\n  justify-content: space-between;\n}\n```', serverId: sid, userId: uid },
    { title: 'HTML Form', content: 'How does this HTML form work?\n```html\n<form action="/submit">\n  <label for="fname">First name:</label><br>\n  <input type="text" id="fname" name="fname"><br>\n  <input type="submit" value="Submit">\n</form>\n```', serverId: sid, userId: uid },
    { title: 'C++ Pointers', content: 'Can someone help me understand this C++ pointers?\n```cpp\nint x = 10;\nint* p = &x;\nprintf("%d", *p);\n```', serverId: sid, userId: uid },
    { title: 'Rust Enums', content: 'What does this Rust enum do?\n```rust\nenum WebEvent {\n  PageLoad,\n  PageUnload,\n  KeyPress(char),\n  Paste(String),\n  Click { x: i64, y: i64 },\n}\n```', serverId: sid, userId: uid },
]

  
  for (const question of questionData) {
    await prisma.question.create({
      data: question,
    })
  }

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect()
  })
