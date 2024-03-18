
---question num1
insert into Employee(Dno,SSN,Superssn) values(30,102672,112233);

---question num2
insert into Employee(Dno,SSN) values(30,102660);
--- question num3
insert into Departments(Dnum,Dname,MGRSSN,[MGRStart Date]) values(100,'DEPT_IT',112233,'11-1-2006');

--- question num 4
update Departments set MGRSSN=968574 where Dnum=100;
update Departments set MGRSSN=112233 where Dnum=20;
update Employee set Fname='ahmed',Lname='nagy' where SSN=102672;
update Employee set Superssn= 112233 where SSN=102672;

---question num 5

---first check the employee's dependant
select * from Dependent;

---delete the data of the dependant
DELETE FROM Dependent
WHERE ESSN = 223344;


---new manager added
update Departments set MGRSSN=102660 where Dnum=10; 
update Employee set Superssn=null ,Dno=null where SSN=223344;
update Employee set Superssn =102660 where SSN=123456;
update Employee set Superssn =102660 where SSN=112233;

---delete the data of mr kamel

delete from Works_for where ESSn=223344;
DELETE FROM Employee
WHERE SSN = 223344;


---question num 6 
update Employee set Salary+=Salary*(0.20) where SSN=102672;


--- display

---question num 1
select * from Employee;

--- question num 2
select Fname,Lname,Salary,Dno from Employee;

--- question num 3 
select Pname,Plocation,Dnum from Project;

---question num 4
select concat(Fname,' ',Lname) as Full_Name, Salary*(12)*(0.10) as ANNUAL_COMM from Employee;

---question num 5
select SSN,concat(Fname,' ',Lname) as Full_Name from Employee where Salary>1000;

---question num 6
select SSN,concat(Fname,' ',Lname) as Full_Name from Employee where Salary*(12)>10000;

---question num 7 
select concat(Fname,' ',Lname) as Her_Name , Salary from Employee where Sex ='F';

---question num 8
select Dname,Dnum from Departments where MGRSSN=968574;

---question num 9
select Pname,Plocation,Pnumber from Project where Dnum=10;




