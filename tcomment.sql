--DELETE FROM tcomment;
--DROP SEQUENCE tcomment_cnum_seq;
--CREATE SEQUENCE tcomment_cnum_seq;

insert into tcomment (nickname, cnum, usernum, memo, tnum) 
VALUES ('�ٹ�', TCOMMENT_CNUM_SEQ.nextval, 1, '�ٹ̴ٹ̸��ٹ̴ٹ̴�.', 8);
insert into tcomment (nickname, cnum, usernum, memo, tnum) 
VALUES ('�ٹ�', TCOMMENT_CNUM_SEQ.nextval, 1, '���ٸ������ٸ���', 7);
insert into tcomment (nickname, cnum, usernum, memo, tnum) 
VALUES ('ȭ��', TCOMMENT_CNUM_SEQ.nextval, 2, 'ȭ�볪ȣ��ȯhwanhwan', 9);
insert into tcomment (nickname, cnum, usernum, memo, tnum) 
VALUES ('ȭ��', TCOMMENT_CNUM_SEQ.nextval, 2, '�ϴ��ϴ��ϴ�ȭ��', 6);
insert into tcomment (nickname, cnum, usernum, memo, tnum)
VALUES ('���', TCOMMENT_CNUM_SEQ.nextval, 2, '�ٳʺ�Ϻ�Ϻ���', 4);
insert into tcomment (nickname, cnum, usernum, memo, tnum) 
VALUES ('����', TCOMMENT_CNUM_SEQ.nextval, 2, '��������~~~', 5);
insert into tcomment (nickname, cnum, usernum, memo, tnum) 
VALUES ('����', TCOMMENT_CNUM_SEQ.nextval, 2, '�󼼱��������ļֶ� ��~~~', 3);

select * from tcomment order by cnum desc;
select tnum, count(tnum) from tcomment group by tnum;
select * from usertable order by usernum desc;