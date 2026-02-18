# Error envío SMTP (Gmail)

Estamos desplegando un backend Node.js que necesita enviar correos mediante  **Gmail SMTP** .

Actualmente el sistema funciona correctamente, pero el envío de correos falla con:

<pre class="overflow-visible! px-0!" data-start="442" data-end="475"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>Error: Connection </span><span>timeout</span><span>
</span></span></code></div></div></pre>

Esto indica que el servidor **no puede establecer conexión saliente** hacia el servidor SMTP de Gmail.

---

## 1 Verificar conectividad saliente SMTP

Desde el servidor Linux ejecutar:

<pre class="overflow-visible! px-0!" data-start="666" data-end="703"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>nc -vz smtp.gmail.com 587
</span></span></code></div></div></pre>

o

<pre class="overflow-visible! px-0!" data-start="708" data-end="745"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>telnet smtp.gmail.com 587
</span></span></code></div></div></pre>

### Resultado esperado:

Debe mostrar algo como:

<pre class="overflow-visible! px-0!" data-start="796" data-end="869"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>Connection </span><span>to</span><span> smtp</span><span>.gmail</span><span>.com</span><span></span><span>587</span><span> port </span><span>[tcp/submission]</span><span> succeeded!
</span></span></code></div></div></pre>

Si hay timeout o no conecta, entonces el puerto está bloqueado.

---

## 2 Abrir puertos salientes necesarios

Solicitamos habilitar tráfico saliente hacia:

| Host           | Puerto | Protocolo |
| -------------- | ------ | --------- |
| smtp.gmail.com | 587    | TCP       |
| smtp.gmail.com | 465    | TCP       |

Si existe firewall (iptables / ufw / firewall externo / política de proveedor), permitir salida TCP a esos destinos.

Ejemplo con UFW:

<pre class="overflow-visible! px-0!" data-start="1290" data-end="1355"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>sudo</span><span> ufw allow out 587/tcp
</span><span>sudo</span><span> ufw allow out 465/tcp
</span></span></code></div></div></pre>

---

## 3 Confirmar que el proveedor no bloquea SMTP saliente

Algunos VPS o redes institucionales bloquean SMTP por política de seguridad.

En caso de bloqueo por política del proveedor:

* Necesitamos habilitación explícita de SMTP saliente
* O confirmación de que no está permitido para considerar alternativa vía API (SendGrid, Mailgun, etc.)

---

## 4 Verificar resolución DNS

Confirmar que el servidor resuelve correctamente:

<pre class="overflow-visible! px-0!" data-start="1795" data-end="1830"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>nslookup smtp.gmail.com
</span></span></code></div></div></pre>

Debe devolver IP válida.

---

## 5 Confirmar que no hay inspección TLS que bloquee handshake

Si existe firewall con inspección profunda, permitir conexión TLS saliente hacia smtp.gmail.com.

---

# Prueba final esperada

Una vez habilitado, ejecutar desde servidor:

<pre class="overflow-visible! px-0!" data-start="2106" data-end="2143"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>nc -vz smtp.gmail.com 587
</span></span></code></div></div></pre>

Si conecta correctamente, el envío de correos desde Node.js debería funcionar sin modificar código.

---

# Nota 

Si la política de red impide SMTP saliente por seguridad:

Se migrará el envío de correos a un servicio vía HTTPS (puerto 443), lo cual no requiere apertura adicional.
