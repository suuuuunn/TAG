--DELETE FROM trend;
--DROP SEQUENCE trend_tnum_seq;
--CREATE SEQUENCE trend_tnum_seq;

insert into trend (title, maintext, tag, tnum, writer, usernum) 
VALUES ('�׽�Ʈ1��','�׽�Ʈ �������Դϴ�', 'trend', TREND_TNUM_SEQ.nextval, '�ٹ�', 1);
insert into trend (title, maintext, tag, tnum, writer, usernum) 
VALUES ('�׽�Ʈ2��','�׽�Ʈ �������Դϴ�', 'trend', TREND_TNUM_SEQ.nextval, '�ٹ�', 1);
insert into trend (title, maintext, tag, tnum, writer, usernum) 
VALUES ('�׽�Ʈ3��','�׽�Ʈ �������Դϴ�', 'trend', TREND_TNUM_SEQ.nextval, '�ٹ�', 1);
insert into trend (title, maintext, tag, tnum, writer, usernum) 
VALUES ('�׽�Ʈ1��','�׽�Ʈ �������Դϴ�', 'trend', TREND_TNUM_SEQ.nextval, '�ٹ�', 1);
insert into trend (title, maintext, tag, tnum, writer, usernum) 
VALUES ('�׽�Ʈ2��','�׽�Ʈ �������Դϴ�', 'trend', TREND_TNUM_SEQ.nextval, '�ٹ�', 1);
insert into trend (title, maintext, tag, tnum, writer, usernum) 
VALUES ('�׽�Ʈ3��','�׽�Ʈ �������Դϴ�', 'trend', TREND_TNUM_SEQ.nextval, '�ٹ�', 1);
insert into trend (title, maintext, tag, tnum, writer, usernum) 
VALUES ('�׽�Ʈ1��','�׽�Ʈ �������Դϴ�', 'trend', TREND_TNUM_SEQ.nextval, '�ٹ�', 1);
insert into trend (title, maintext, tag, tnum, writer, usernum) 
VALUES ('�׽�Ʈ2��','�׽�Ʈ �������Դϴ�', 'trend', TREND_TNUM_SEQ.nextval, '�ٹ�', 1);
insert into trend (title, maintext, tag, tnum, writer, usernum) 
VALUES ('�׽�Ʈ3��','�׽�Ʈ �������Դϴ�', 'trend', TREND_TNUM_SEQ.nextval, '�ٹ�', 1);
select * from trend order by tnum desc;






