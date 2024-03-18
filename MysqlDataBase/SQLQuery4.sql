--Author : Ahmed Nagy Abdulfattah 
--Date : 23/11/23
--Under the supervision of (Eng.Hend Samir)


---question num 1
select Fname,Dnum,Dname from Employee E,Departments D where E.SSN=D.MGRSSN;

---question num 2
select Dname, Pname from Departments D,Project P where D.Dnum=P.Dnum;

---question num 3
select * ,Fname from Dependent D,Employee E where E.SSN=D.ESSN;

---question num 4
-- Female dependents depending on Female Employee (Output = none "for sarrow")  --
select Dependent.Dependent_name, Dependent.Sex
from Employee
join Dependent ON Employee.SSN = Dependent.ESSN
where Employee.Sex = 'F' and Dependent.Sex = 'F'

UNION

---- Male dependents depending on Male Employee(Output = 2 "Good News")------
select Dependent.Dependent_name, Dependent.Sex
from Employee
join Dependent ON Employee.SSN = Dependent.ESSN
where Employee.Sex = 'M' and Dependent.Sex = 'M';

---question num 5
select Pnumber ,Pname , Plocation from Project where City='Cairo' or City='Alex';

---question num 6
select * from Project where	Pname='a%';

---question num 7
select * from Employee E join Departments D on D.Dnum=E.Dno where D.Dnum=30 and E.Salary between 1000 and 2000;

---question num 8
select * from Employee join Works_for on Works_for.ESSn=Employee.SSN join Project on Works_for.Pno=Project.Pnumber where Employee.Dno=10 and Project.Pname='AL_Rabwah' and Works_for.Hours>=10;

---question num 9
select E.Fname+' '+E.Lname as Full_name from Employee E join Employee M on M.SSN=E.Superssn where M.Fname='tataa';

---question num 10
select P.Pname,W.Hours from Project P,Works_for W where W.Pno=P.Pnumber;

---question num 11
select E.Fname+' ' +E.Fname as Full_name ,P.Pname from Employee E , Project P , Works_for W where W.ESSn=E.SSN and W.Pno=P.Pnumber;

---question num 12 (i'm working on mssql which have no keyword limit so i searched on google and i found top operator)
select top 1 Departments.* from Departments join Employee on Departments.Dnum=Employee.Dno order by SSN Asc ;


---question num 13 
select Departments.Dname, min(Employee.Salary) as min_salary, max(Employee.Salary) as max_salary
from Departments
join Employee on Departments.Dnum = Employee.Dno
group by Departments.Dname;

---question num 14 manager to an employee
select Lname from Employee E , Dependent D where  D.ESSN=E.Superssn;

---question num 14 another solution (manager to a department
select Lname from Employee E inner join Departments Dpt on Dpt.MGRSSN=E.SSN inner join Dependent D on D.ESSN=E.SSN;

---question num 15
select concat(D.Dname ,' ',count(SSN)) As Emp_data  from Employee E inner join Departments D on E.Dno=D.Dnum group by Dname,D.Dnum having Avg(Salary)< (select AVG(Salary) from Employee);

---question num 16
select e.SSN, e.Lname, e.Fname, e.Dno, p.Pname from Employee e join Works_for Wk on  e.SSN = Wk.ESSn join Project p on Wk.Pno = p.Pnumber order by e.Dno, e.Lname, e.Fname;

---question 17
select p.Pnumber, d.Dname , e.Lname as department_manager_last_name, e.Address as manager_address, e.Bdate as manager_birthdate from Project p join departments d on p.Dnum = d.Dnum join Employee e on d.MGRSSN = e.SSN where p.city = 'Cairo';
