/*select * from tbs_nome where cod = 401
select * from tbs_sobrenome where cod = 1365
select * from tbs_email where cod = 1469*/
/*
select tabels.nome, tabels.soma from (
select 'Nome: ' as nome,  cn.cod + cn.soma as soma from tbs_cod_nome cn where cn.cod = 401 
UNION  
select 'Sobrenome: ' as nome, cs.cod + cs.soma as soma from tbs_cod_sobrenome cs where cs.cod = 1365 
UNION  
select 'email: ' as nome,  ce.cod + ce.soma  as soma from tbs_cod_email ce where ce.cod = 1469) as tabels;
*/

select * from tbs_animais an
join
tbs_cores co on co.total = an.total
left join 
tbs_cores_excluidas ce on ce.total = an.total
join
tbs_paises pa on an.total = pa.total
where an.total = 20836