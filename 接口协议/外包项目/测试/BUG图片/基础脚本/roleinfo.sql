delete  from  roleinfo  t where t.roleserial=14;
insert into roleinfo (ROLESERIAL, ROLENAME, ISENABLE, PRIVILEGE, CREATOR, REMARK, CREATETIME)
values (14, '���������̹���Ա', 0, 'FFFFFFFFFFFFFFFFFFFFFFFFFF', null, '����������', to_date('02-06-2017 09:34:56', 'dd-mm-yyyy hh24:mi:ss'));

commit;
