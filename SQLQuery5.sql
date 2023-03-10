USE [CONTOSO]
GO
/****** Object:  StoredProcedure [dbo].[teste_bruno_santos]    Script Date: 29/12/2022 13:42:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[teste_bruno_santos](@nome varchar(100), @sobrenome varchar(100), @email varchar(100),
@cod_nome bigint, @cod_sobrenome bigint, @cod_email bigint)  as


if not EXISTS (select * from tbs_nome where cod = @cod_nome)
BEGIN
--------------Questao 3----------------------
/** Insere tabela nome*/
insert into tbs_nome(nome, cod)
	values (@nome, @cod_nome);
end

if not EXISTS (select * from tbs_sobrenome where cod = @cod_sobrenome)
BEGIN
/** Insere tabela sobrenome*/
insert into tbs_sobrenome(sobrenome, cod)
	values (@sobrenome, @cod_sobrenome);
end

if not EXISTS (select * from tbs_sobrenome where cod = @cod_sobrenome)
BEGIN
/** Insere tabela email*/
insert into tbs_email(email, cod)
	values (@email, @cod_email);
end
-------------------------------------------


----------------Questao 4 e 5-----------------
declare @total_nome bigint
declare @total_sobrenome bigint
declare @total_email bigint
declare @total_soma bigint


select @total_nome = cn.cod + cn.soma  from tbs_cod_nome cn where cn.cod = @cod_nome;
select @total_sobrenome = cs.cod + cs.soma from tbs_cod_sobrenome cs where cs.cod = @cod_sobrenome;
select @total_email = ce.cod + ce.soma from tbs_cod_email ce where ce.cod = @cod_email;
select @total_soma = @total_nome + @total_sobrenome + @total_email
/*
select 'Nome: ' as descricao, @total_nome as total
UNION
select 'Sobrenome: ', @total_sobrenome
UNION
select 'Email: ', @total_email
UNION
select 'Total', @total_soma
*/
--------------------------------------

--------Questao 6 --------------------


select * from tbs_animais an
join
tbs_cores co on co.total = an.total
left join 
tbs_cores_excluidas ce on ce.total = an.total
join
tbs_paises pa on an.total = pa.total
where an.total = 20836