# 🚀 Zero to Hero: Modern Java Fintech Architect Roadmap

## 👨‍🏫 Mentor's Note
Welcome. You have chosen a path that leads to the backbone of the global financial system. Fintech and Enterprise systems do not tolerate instability. This curriculum is designed not just to teach you syntax, but to shape your mindset into that of a **System Architect**. 

We focus on **correctness**, **scalability**, and **modernity** (Java 21+).

---

## 📅 Phase 1: The Foundation (Java Core)
**Goal:** Master the language mechanics. No frameworks, just pure logic.

| Week | Focus Area | Detailed Topics | Practical Task | Est. Time |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Syntax & Logic** | • JVM Architecture (JDK vs JRE)<br>• primitives vs Wrapper Classes<br>• Stack vs Heap Memory<br>• Control Flow (if, switch expressions)<br>• Arrays & Loops | **Build a CLI Banking Menu:**<br>Create a command-line tool that lets a user check balance (fake), deposit, and withdraw. Handle invalid inputs strictly. | 2.5h / day |
| **2** | **OOP: Structure** | • **Encapsulation:** Private fields, Getters/Setters<br>• **Constructors:** `this`, `super`<br>• **Inheritance:** `extends`, Method Overriding<br>• **Polymorphism:** Method Overloading | **Employee Management System:**<br>Create regular `Employee` and `Manager` classes. Calculate bonuses differently for each using overriding. | 2h / day |
| **3** | **OOP: Abstraction** | • **Abstract Classes** vs **Interfaces**<br>• `static` and `final` keywords (Critical for constants)<br>• Composition over Inheritance (The "Has-A" relationship)<br>• Java Packages & Access Modifiers | **Payment Processor Interface:**<br>Define an interface `Payable`. Implement it in `CreditCard` and `PayPal` classes. Process a list of payments polymorphically. | 2.5h / day |
| **4** | **Data Structures** | • **Collections API:** `List`, `Set`, `Map`<br>• **Generics:** `<T>` basics<br>• **Streams API:** `filter`, `map`, `reduce`<br>• **Lambdas:** Functional Interfaces | **Stock Price Analyzer:**<br>Store a list of stock prices. Use Streams to find the highest price, average price, and filter out stocks below $10. | 2.5h / day |

### 🧠 Phase 1 Quizzes

**Week 1 Quiz:**
1. Q: Why is a `String` immutable in Java?
   *A: For security, caching (String Pool), and thread safety.*
2. Q: What happens if you try to access an array index that doesn't exist?
   *A: `ArrayIndexOutOfBoundsException` is thrown at runtime.*
3. Q: Difference between `int` and `Integer`?
   *A: `int` is a primitive (efficient, stack-based). `Integer` is an object wrapper (heap-based, allows nulls).*

**Week 2 Quiz:**
1. Q: Can a constructor be `private`? Why would you do that?
   *A: Yes. common in Singleton pattern or utility classes to prevent instantiation.*
2. Q: What is the difference between `this()` and `super()`?
   *A: `this()` calls another constructor in the same class; `super()` calls the parent class constructor.*
3. Q: Does Java support multiple inheritance?
   *A: No, not with classes (to avoid Diamond Problem), but yes with Interfaces.*

**Week 3 Quiz:**
1. Q: Can you create an instance of an Abstract class?
   *A: No, it represents an incomplete concept.*
2. Q: What does `final` mean on a method?
   *A: The method cannot be overridden by subclasses.*
3. Q: Why prefer Composition over Inheritance?
   *A: It's more flexible. You can change behavior at runtime and avoid "fragile base class" issues.*

**Week 4 Quiz:**
1. Q: `ArrayList` vs `LinkedList` - when to use which?
   *A: `ArrayList` for fast access (get). `LinkedList` for fast insertions/deletions.*
2. Q: What is the efficiency of `HashMap.get()`?
   *A: O(1) on average.*
3. Q: Can a Stream be reused after a terminal operation (like `.collect`)?
   *A: No, Streams are one-time use pipelines.*

---

## 🏢 Phase 2: The Enterprise Standard (Spring Boot)
**Goal:** Build production-ready web services and APIs.

| Week | Focus Area | Detailed Topics | Practical Task | Est. Time |
| :--- | :--- | :--- | :--- | :--- |
| **5** | **Spring Core** | • **Dependency Injection (DI):** `@Autowired`, Constructor Injection<br>• **Inversion of Control (IoC)**<br>• Bean Scopes (Singleton vs Prototype)<br>• Spring Boot Starters | **Console Bean App:**<br>Create a simple app where a `NotificationService` injects an `EmailSender` bean to print messages. | 2h / day |
| **6** | **RESTful APIs** | • `@RestController`, `@GetMapping`, `@PostMapping`<br>• Request Body & Path Variables<br>• HTTP Status Codes (200, 404, 500)<br>• Exception Handling: `@ControllerAdvice` | **To-Do API:**<br>Build a REST API to Create, Read, Update, and Delete (CRUD) tasks. Test it with Postman. | 2.5h / day |
| **7** | **Data (JPA)** | • **Hibernate/JPA:** Entities, `@Id`<br>• **Repository Pattern:** `JpaRepository`<br>• Relationships: `@OneToMany`, `@ManyToOne`<br>• H2 Database (In-memory) vs MySQL | **User-Order System:**<br>Create `User` and `Order` entities. Save users to a database and query their orders. | 2.5h / day |
| **8** | **AI Integration** | • **Spring AI:** Configuration<br>• integrating OpenAI/Gemini APIs<br>• Prompt Engineering in Java<br>• Parsing AI Responses | **AI Financial Advisor:**<br>An endpoint where you send a "spending description" and the AI categorizes it (e.g., "Food", "Transport"). | 2.5h / day |

### 🧠 Phase 2 Quizzes

**Week 5 Quiz:**
1. Q: Why is Constructor Injection preferred over Field Injection?
   *A: It ensures the bean is immutable and fully initialized (prevents NullPointer).*
2. Q: What is the default scope of a Spring Bean?
   *A: Singleton (one instance per application context).*
3. Q: What does `@SpringBootApplication` do?
   *A: Combines `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`.*

**Week 6 Quiz:**
1. Q: Difference between `@Controller` and `@RestController`?
   *A: `@RestController` includes `@ResponseBody`, meaning it returns data (JSON), not a view (HTML).*
2. Q: What HTTP method is idempotent?
   *A: PUT and DELETE (and GET). POST is not.*
3. Q: How do you handle a "User Not Found" error globally?
   *A: Use `@ExceptionHandler` inside a `@ControllerAdvice` class.*

**Week 7 Quiz:**
1. Q: What is the difference between `Save` and `SaveAndFlush`?
   *A: `SaveAndFlush` forces the data to be written to the DB immediately, `Save` might batch it.*
2. Q: What does `@Transactional` do?
   *A: Ensures a method runs in a DB transaction. If it fails, all changes are rolled back.*
3. Q: Why use DTOs (Data Transfer Objects) instead of Entities?
   *A: To decouple your API contract from your database schema.*

**Week 8 Quiz:**
1. Q: Why do we need an API Key for LLMs?
   *A: Authentication and billing/rate-limiting by the provider.*
2. Q: What is "Temperature" in AI models?
   *A: A setting controlling randomness. 0 is deterministic, 1 is creative.*
3. Q: Can Spring AI switch between OpenAI and Gemini easily?
   *A: Yes, if using the abstraction layer correctly, it's just a config change.*

---

## 🚀 Phase 3: Modern Java & Concurrency (Java 21+)
**Goal:** High-performance systems handling millions of transactions.

| Week | Focus Area | Detailed Topics | Practical Task | Est. Time |
| :--- | :--- | :--- | :--- | :--- |
| **9** | **Modern Syntax** | • **Records:** Immutable data carriers (Goodbye Getters/Setters)<br>• **Pattern Matching:** `instanceof`, switch expressions<br>• **Sealed Classes:** Controlling hierarchy<br>• Text Blocks | **Modern Refactor:**<br>Take your Week 2 "Employee" app and refactor it to use Records and Switch Expressions. | 2h / day |
| **10** | **Concurrent Foundations** | • Threads vs Runnable<br>• The `synchronized` keyword<br>• `ExecutorService` & Thread Pools<br>• Race Conditions & Deadlocks | **File Downloader:**<br>Simulate downloading 10 files simultaneously using a Fixed Thread Pool. Measure time vs sequential. | 2.5h / day |
| **11** | **Virtual Threads** | • **Project Loom:** Virtual vs Platform Threads<br>• Blocking code is cheap again<br>• High-throughput I/O<br>• **Structured Concurrency** (Preview) | **High-Load Server:**<br>Create a server that accepts 10,000 "requests" (sleeps for 1s). Run with Platform threads (crash) vs Virtual threads (success). | 2.5h / day |

### 🧠 Phase 3 Quizzes

**Week 9 Quiz:**
1. Q: Are Records immutable?
   *A: Yes, by design. Fields are private and final.*
2. Q: What is the purpose of a Sealed Class?
   *A: To restrict which other classes can extend it. Good for domain modeling.*
3. Q: How do Text Blocks help?
   *A: Multiline strings (like SQL or JSON) without ugly escape characters (`\n`).*

**Week 10 Quiz:**
1. Q: What is a Race Condition?
   *A: When two threads access shared data simultaneously, leading to unpredictable results.*
2. Q: Why use a Thread Pool?
   *A: Creating threads is expensive (RAM/CPU). Pools reuse existing threads.*
3. Q: What does `volatile` guarantee?
   *A: Visibility. Changes to a variable are immediately seen by other threads.*

**Week 11 Quiz:**
1. Q: What is the main benefit of Virtual Threads?
   *A: They are extremely lightweight (kb of RAM) so you can have millions of them.*
2. Q: Do Virtual Threads speed up CPU-intensive tasks?
   *A: No. They optimize I/O-intensive tasks (waiting for DB/Network).*
3. Q: What happens if a Virtual Thread blocks on I/O?
   *A: The carrier thread is released to do other work. No OS thread is blocked.*

---

## 🏗️ Phase 4: System Design & Architecture
**Goal:** Designing systems that don't crash under pressure.

| Week | Focus Area | Detailed Topics | Practical Task | Est. Time |
| :--- | :--- | :--- | :--- | :--- |
| **12** | **Scalability Basics** | • Vertical vs Horizontal Scaling<br>• **Load Balancers:** Nginx basics (conceptual)<br>• Stateless Services<br>• CAP Theorem | **Load Balancer Sim:**<br>Write a Java program that acts as a "gateway", distributing requests to 3 "server" lists in a Round-Robin fashion. | 2h / day |
| **13** | **Caching (Redis)** | • Why Cache? (Read-heavy systems)<br>• **Redis:** Key-Value store<br>• Strategies: Cache-Aside, Write-Through<br>• TTL (Time To Live) & Eviction | **Fast API with Cache:**<br>Add Redis to your Week 6 API. First request hits DB (slow), second request hits Cache (instant). | 2.5h / day |
| **14** | **Database Scale** | • **Sharding:** Splitting data by key<br>• Replication: Master-Slave<br>• Eventual Consistency<br>• ACID compliance limits | **Sharding Logic:**<br>Implement a `ShardManager` class. Given a `userId`, determine which mock "database" (List A or List B) it belongs to using modulo `%`. | 2.5h / day |
| **15** | **Capstone** | • Designing a **Fintech Ledger**<br>• Double-entry bookkeeping concepts<br>• Idempotency keys (handling retries)<br>• Audit Logging | **Build The Ledger:**<br>A precise transaction recorder that ensures money is never created or destroyed, only moved. | 3h / day |

### 🧠 Phase 4 Quizzes

**Week 12 Quiz:**
1. Q: What is Horizontal Scaling?
   *A: Adding more machines to the pool (scaling out), rather than upgrading the single machine.*
2. Q: What does a Load Balancer do?
   *A: Distributes incoming network traffic across multiple servers to ensure reliability.*
3. Q: Why must REST APIs be stateless for scaling?
   *A: So any server can handle any request without needing to know user session history.*

**Week 13 Quiz:**
1. Q: What is the "Cache-Aside" pattern?
   *A: Application checks Cache. If miss, reads DB, then updates Cache and returns.*
2. Q: What happens if you don't set a TTL on cache keys?
   *A: Memory fills up, potentially crashing the cache or evicting important data.*
3. Q: Is Redis persistent?
   *A: Yes, it can be, but it's primarily used as an in-memory store.*

**Week 14 Quiz:**
1. Q: What is Sharding?
   *A: Structurally splitting a database into smaller chunks (shards) across different servers.*
2. Q: What is the downside of Sharding?
   *A: Complex queries (Joins) across shards are very difficult and slow.*
3. Q: What is Idempotency?
   *A: Doing the same operation multiple times has the same effect as doing it once (crucial for payments).*

---
