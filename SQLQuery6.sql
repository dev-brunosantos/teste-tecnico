USE [CONTOSO]
GO

DECLARE	@return_value int

EXEC	@return_value = [dbo].[teste_bruno_santos]
		@nome = 'Testes Nome',
		@sobrenome = 'Teste sobrenome',
		@email = 'Teste e-mail',
		@cod_nome = 401,
		@cod_sobrenome = 1365,
		@cod_email = 1469

SELECT	'Return Value' = @return_value

GO
