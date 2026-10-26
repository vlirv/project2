# Wedding Hall Booking Website — موقع حجز القاعة

A wedding hall booking website built with **HTML, CSS and Bootstrap 5** (Group 4 – Event Management System). Team of 4.

## Folder structure

```
project2/
├── pages/
│   ├── index.html          Home page                 (Person 1)
│   ├── contact.html        Contact form + address    (Person 1)
│   ├── calendar.html       Available / booked days   (Person 2)
│   ├── booking.html        Booking form              (Person 2)
│   ├── my-bookings.html    My bookings               (Person 2)
│   ├── services.html       Services + prices         (Person 3)
│   ├── payment.html        Demo payment              (Person 3)
│   ├── invoice.html        Invoice + print           (Person 3)
│   ├── login.html          Login                     (Person 4)
│   ├── register.html       Create account            (Person 4)
│   ├── admin.html          Admin dashboard           (Person 4)
│   └── supervisor.html     Supervisor dashboard      (Person 4)
├── css/
│   ├── style.css       Shared colors, fonts, buttons   (Person 1)
│   ├── navbar.css      Navbar styling                  (Person 1)
│   ├── responsive.css  Mobile / desktop                (Person 1)
│   ├── booking.css     Booking styles                  (Person 2)
│   ├── services.css    Services / payment styles       (Person 3)
│   └── auth.css        Login / register / dashboards   (Person 4)
└── images/             Put all photos here
```

All HTML pages live in `pages/`. From a page, link CSS as `../css/...` and images as `../images/...`; link other pages by file name only (e.g. `booking.html`).

Every page already has the shared **navbar** and **footer** and links to the right CSS files.
Pages that still need work show an "Under construction" box listing what to build. Replace it with your content.

## Task distribution — توزيع المهام

| Person | Responsibility | Files |
|---|---|---|
| **Person 1** – Foundation & Home | Repo, shared CSS, navbar/footer, home, contact, responsive, publishing on GitHub Pages | `index.html`, `contact.html`, `style.css`, `navbar.css`, `responsive.css` |
| **Person 2** – Booking & Scheduling | Calendar, booking form + validation, my bookings, Edit/Cancel buttons (design only) | `calendar.html`, `booking.html`, `my-bookings.html`, `booking.css` |
| **Person 3** – Services, Pricing & Payment | Service cards, selection options, payment demo, static total/deposit/remaining example, invoice + print button, responsive services/payment/invoice | `services.html`, `payment.html`, `invoice.html`, `services.css` |
| **Person 4** – Users & Administration | Login, register, Admin dashboard (bookings table, Accept/Reject/Schedule buttons — design only), Supervisor dashboard (upcoming events), Admin/Supervisor/Guest views, confirmation messages & alerts, consistency with shared CSS | `login.html`, `register.html`, `admin.html`, `supervisor.html`, `auth.css` |

**Rule:** edit only your own files. If you need to change a shared file (`style.css`, `navbar.css`, navbar or footer HTML), tell the team first.

---

## How to join and work together — طريقة الانضمام والعمل

### 1. Get access (one time)
1. Create a free account on [github.com](https://github.com).
2. Send your GitHub username to the repo owner.
3. The owner adds you: **Settings → Collaborators → Add people**.
4. Accept the invitation email.

### 2. Download the project (one time)
```bash
git clone https://github.com/vlirv/project2.git
cd project2
```
(Or use **GitHub Desktop → File → Clone repository**, or VS Code's **Clone Git Repository**.)

### 3. Every time you work
```bash
git pull origin main          # 1. get your teammates' latest work FIRST
# ... edit your files ...
git add .                     # 2. stage your changes
git commit -m "Add booking form fields"   # 3. save with a clear message
git pull origin main          # 4. pull again in case someone pushed meanwhile
git push origin main          # 5. upload your work
```

### Optional: work on your own branch (safer)
```bash
git checkout -b person2-booking      # create your branch once
git push -u origin person2-booking   # upload it
```
Then on GitHub open a **Pull Request** into `main` so the team can review before merging.

### Tips
- Always `git pull` **before** you start working.
- Commit small and often, with clear messages.
- Put images in `images/` with lowercase names and no spaces (e.g. `hall-1.jpg`).
- To preview a page, just open the `.html` file from `pages/` in your browser (or use VS Code's Live Server).

## Publishing (Person 1, at the end)
**Settings → Pages → Source: Deploy from a branch → `main` / root → Save.**
The site will be at `https://vlirv.github.io/project2/pages/index.html`.
